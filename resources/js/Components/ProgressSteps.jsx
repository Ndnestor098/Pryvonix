import { Check } from 'lucide-react';

export default function ProgressSteps({
    steps,
    confirmation = false,
    confirmAllSteps = false,
}) {
    return (
        <div className="border-b border-gray-200 bg-white px-6 py-4">
            <div className="mx-auto max-w-7xl">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                            <div className="h-6 w-6 rounded bg-blue-600"></div>
                        </div>
                        <span className="text-sm text-gray-600">
                            Panel de Control
                        </span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-between">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div
                                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                        confirmAllSteps
                                            ? 'bg-blue-500 text-white'
                                            : step.active
                                              ? 'bg-blue-500 text-white'
                                              : 'bg-gray-200 text-gray-400'
                                    }`}
                                >
                                    {confirmAllSteps ? <Check /> : step.id}
                                </div>
                                <span
                                    className={`mt-1 text-xs ${
                                        confirmAllSteps
                                            ? 'font-medium text-blue-600'
                                            : step.active
                                              ? 'font-medium text-blue-600'
                                              : 'text-gray-400'
                                    }`}
                                >
                                    {step.name}
                                </span>
                            </div>
                            {index < steps.length - 1 && (
                                <div
                                    className={`mx-4 h-0.5 w-16 ${
                                        confirmation &&
                                        String(step.id) ===
                                            String(confirmation[0])
                                            ? 'bg-blue-500'
                                            : 'bg-gray-200'
                                    }`}
                                ></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
