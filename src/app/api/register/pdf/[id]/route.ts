import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Registration from '@/models/Registration';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await context.params;
    const { searchParams } = new URL(req.url);
    const dispositionParam = searchParams.get('disposition');
    const disposition: 'attachment' | 'inline' =
      dispositionParam === 'inline' || dispositionParam === 'preview' ? 'inline' : 'attachment';
    const registration = await Registration.findById(id).lean();

    if (!registration) {
      return NextResponse.json({ success: false, error: 'Registration not found' }, { status: 404 });
    }

    // Create PDF
    const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size in points
    const { width, height } = page.getSize();

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Try to embed logo from public/images/hoop.avif -> convert to PNG first
    const publicDir = path.join(process.cwd(), 'public');
    const logoPath = path.join(publicDir, 'images', 'hoop.avif');

    let logoWidth = 0;
    let logoHeight = 0;
    try {
      const avifBuffer = await fs.readFile(logoPath);
      const pngBuffer = await sharp(avifBuffer).png().toBuffer();
      const pngImage = await pdfDoc.embedPng(pngBuffer);
      logoWidth = 64;
      logoHeight = (pngImage.height / pngImage.width) * logoWidth;
      page.drawImage(pngImage, {
        x: 40,
        y: height - 40 - logoHeight,
        width: logoWidth,
        height: logoHeight,
      });
    } catch {
      // Logo optional; continue without it
    }

  // Colors
  const gray = (v: number) => rgb(v, v, v);
  const lineColor = rgb(0.85, 0.85, 0.85);

  // Header area background
  page.drawRectangle({ x: 30, y: height - 130, width: width - 60, height: 80, color: rgb(0.96, 0.98, 1) });

  // Header text
    const title = 'DaggoPride Basketball Registration';
    const subtitle = 'Registration Confirmation';

    page.drawText('DaggoPride', {
      x: 40 + (logoWidth ? logoWidth + 12 : 0),
      y: height - 48,
      size: 20,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.1),
    });

    page.drawText(title, {
      x: 40,
      y: height - 90,
      size: 16,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.25),
    });

    page.drawText(subtitle, {
      x: 40,
      y: height - 110,
      size: 12,
      font,
      color: rgb(0.3, 0.3, 0.4),
    });

    // Divider line
    page.drawLine({ start: { x: 40, y: height - 120 }, end: { x: width - 40, y: height - 120 }, thickness: 1, color: lineColor });

    // Helper to add label/value rows
    const leftX = 40;
    const rightX = width / 2 + 10;
    let y = height - 150;
    const lineGap = 18;

    const drawRow = (label: string, value: string, x: number) => {
      page.drawText(label, { x, y, size: 10, font: boldFont, color: gray(0.25) });
      page.drawText(value || '-', { x, y: y - 14, size: 11, font, color: gray(0) });
    };

    const drawSectionHeader = (text: string) => {
      page.drawText(text, { x: 40, y, size: 12, font: boldFont, color: gray(0.15) });
      y -= 8;
      page.drawLine({ start: { x: 40, y }, end: { x: width - 40, y }, thickness: 1, color: lineColor });
      y -= 14;
    };

    const drawSectionGridDivider = (yTop: number, yBottom: number) => {
      // Vertical grid line between columns
      page.drawLine({ start: { x: width / 2, y: yTop }, end: { x: width / 2, y: yBottom }, thickness: 0.5, color: lineColor });
    };

    // Personal info
    const personalTop = y + 6;
    drawSectionHeader('Personal Information');
    drawRow('First Name', registration.firstName, leftX);
    drawRow('Last Name', registration.lastName, rightX);
    y -= lineGap * 2;
    page.drawLine({ start: { x: 40, y }, end: { x: width - 40, y }, thickness: 0.5, color: lineColor });
    drawSectionGridDivider(personalTop, y);

    drawRow('Email', registration.email, leftX);
    drawRow('Phone', registration.phone, rightX);
    y -= lineGap * 2;
    page.drawLine({ start: { x: 40, y }, end: { x: width - 40, y }, thickness: 0.5, color: lineColor });
    drawSectionGridDivider(personalTop, y);

    const dob = registration.dateOfBirth
      ? new Date(registration.dateOfBirth).toLocaleDateString()
      : '';
    drawRow('Date of Birth', dob, leftX);
    drawRow('Gender', registration.gender, rightX);
    y -= lineGap * 2;
    page.drawLine({ start: { x: 40, y }, end: { x: width - 40, y }, thickness: 0.5, color: lineColor });
    drawSectionGridDivider(personalTop, y);

    // Address
    y -= 10;
    const addressTop = y + 6;
    drawSectionHeader('Address');
    drawRow('Address', registration.address, leftX);
    drawRow('City', registration.city, rightX);
    y -= lineGap * 2;
    page.drawLine({ start: { x: 40, y }, end: { x: width - 40, y }, thickness: 0.5, color: lineColor });
    drawSectionGridDivider(addressTop, y);

    drawRow('State', registration.state, leftX);
    drawRow('ZIP Code', registration.zipCode, rightX);
    y -= lineGap * 2;
    page.drawLine({ start: { x: 40, y }, end: { x: width - 40, y }, thickness: 0.5, color: lineColor });
    drawSectionGridDivider(addressTop, y);

    // Guardian (optional)
    y -= 10;
    const guardianTop = y + 6;
    drawSectionHeader('Guardian (if under 18)');
    drawRow('Guardian Name', registration.guardianName || '', leftX);
    drawRow('Guardian Phone', registration.guardianPhone || '', rightX);
    y -= lineGap * 2;
    page.drawLine({ start: { x: 40, y }, end: { x: width - 40, y }, thickness: 0.5, color: lineColor });
    drawSectionGridDivider(guardianTop, y);

    drawRow('Guardian Email', registration.guardianEmail || '', leftX);
    y -= lineGap * 2;
    page.drawLine({ start: { x: 40, y }, end: { x: width - 40, y }, thickness: 0.5, color: lineColor });
    drawSectionGridDivider(guardianTop, y);

    // Emergency
    y -= 10;
    const emergencyTop = y + 6;
    drawSectionHeader('Emergency Contact');
    drawRow('Emergency Contact', registration.emergencyContact, leftX);
    drawRow('Emergency Phone', registration.emergencyPhone, rightX);
    y -= lineGap * 2;
    page.drawLine({ start: { x: 40, y }, end: { x: width - 40, y }, thickness: 0.5, color: lineColor });
    drawSectionGridDivider(emergencyTop, y);

    // Program
    y -= 10;
    const programTop = y + 6;
    drawSectionHeader('Program');
    drawRow('Program Interest', registration.programInterest, leftX);
    y -= lineGap * 2;
    page.drawLine({ start: { x: 40, y }, end: { x: width - 40, y }, thickness: 0.5, color: lineColor });
    drawSectionGridDivider(programTop, y);

    // Long text sections
    const drawParagraph = (label: string, text: string) => {
      page.drawText(label, { x: leftX, y, size: 10, font: boldFont, color: gray(0.25) });
      y -= 12;
      const boxTop = y + 10;
      const maxWidth = width - 80;
      const words = (text || '-').split(' ');
      let line = '';
      for (const word of words) {
        const testLine = line ? `${line} ${word}` : word;
        const testWidth = font.widthOfTextAtSize(testLine, 11);
        if (testWidth > maxWidth) {
          page.drawText(line, { x: leftX, y, size: 11, font, color: gray(0) });
          y -= 14;
          line = word;
        } else {
          line = testLine;
        }
      }
      if (line) {
        page.drawText(line, { x: leftX, y, size: 11, font, color: gray(0) });
        y -= 16;
      }
      // Border box for paragraph
      const boxBottom = y + 6;
      const boxHeight = boxTop - boxBottom;
      page.drawRectangle({ x: 36, y: boxBottom, width: width - 72, height: boxHeight, borderColor: lineColor, borderWidth: 1, color: undefined });
    };

    drawParagraph('Medical Conditions / Allergies', registration.medicalConditions || '');
    drawParagraph('Current Skills', registration.skills || '');
    drawParagraph('Previous Experience', registration.experience || '');

    // Footer
    page.drawLine({ start: { x: 40, y: 60 }, end: { x: width - 40, y: 60 }, thickness: 1, color: rgb(0.9, 0.9, 0.9) });
    page.drawText(`Registration ID: ${String(registration._id)}`, {
      x: 40,
      y: 46,
      size: 9,
      font,
      color: gray(0.4),
    });
    page.drawText('Thank you for registering with DaggoPride!', {
      x: 40,
      y: 32,
      size: 10,
      font,
      color: rgb(0.35, 0.35, 0.35),
    });

    const pdfBytes = await pdfDoc.save();

    const filename = `registration_${registration.lastName || 'user'}_${registration._id}.pdf`;
    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `${disposition}; filename="${filename}"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json({ success: false, error: 'Failed to generate PDF' }, { status: 500 });
  }
}
