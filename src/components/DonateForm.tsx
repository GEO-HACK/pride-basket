"use client"

import { useState, useTransition } from 'react';
import { initiateMpesaPayment } from '@/app/actions/mpesa';

export default function DonateForm() {
    const [isPending, startTransition] = useTransition();
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handlePayment = () => {
        setErrorMessage(null);
        setPaymentStatus('pending');
        if (!/^(2547|2541)\d{8}$/.test(phone)) {
            setErrorMessage('Please enter a valid phone number in the format 2547XXXXXXXX or 2541XXXXXXXX.');
            setPaymentStatus(null);
            return;
        }

        if (Number(amount) <= 0) {
            setErrorMessage('Please enter a valid amount.');
            setPaymentStatus(null);
            return;
        }

        startTransition(async () => {
            try {
                const res = await initiateMpesaPayment({
                    phone,
                    amount: Number(amount),
                });

                if (res.ResponseCode === '0') {
                    setPaymentStatus('success');
                    setShowModal(true);
                } else {
                    setPaymentStatus('failed');
                    setErrorMessage(res.ResponseDescription || 'Payment failed.');
                }
                console.log(res);
            } catch (error) {
                setPaymentStatus('failed');
                setErrorMessage('An unexpected error occurred. Please try again.');
                console.error(error);
            }
        });
    };

    const closeModal = () => {
        setShowModal(false);
        setPhone('');
        setAmount('');
        setPaymentStatus(null);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 max-w-md mx-auto">
            <div className="w-full  rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Make a Donation</h2>

                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="2547XXXXXXXX"
                        className="w-full px-3 py-2 border border-gray-300 text-gray-950 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Amount (KES)</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>

                {errorMessage && (
                    <div className="mb-4 text-sm text-red-600 bg-red-100 p-3 rounded-md">
                        {errorMessage}
                    </div>
                )}

                <button
                    onClick={handlePayment}
                    disabled={isPending || !phone || !amount}
                    className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                    {isPending ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </div>
                    ) : 'Donate Now'}
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm mx-auto">
                        <h3 className="text-lg font-bold text-gray-900">Donation Initiated</h3>
                        <div className="mt-4">
                            <p className="text-sm text-gray-600">A payment prompt has been sent to your phone. Please enter your M-PESA PIN to complete the donation.</p>
                        </div>
                        <div className="mt-6">
                            <button
                                onClick={closeModal}
                                className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}