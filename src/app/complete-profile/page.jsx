"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import PersonalInfoForm from "@/component/registerationForm/PersonalInfoForm";
// Import other forms similarly:
import ReligiousInfoForm from "@/component/registerationForm/ReligiousInfoForm";
import FamilyBackgroundForm from "@/component/registerationForm/FamilyBackgroundForm";
import CareerEducationForm from "@/component/registerationForm/CareerEducationForm";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [formValues, setFormValues] = useState({});
  const totalSteps = 4;
  const [loading, setLoading] = useState(false);

  // Create refs for each form to call their submit methods
  const personalRef = useRef();
  const religiousRef = useRef();
  const familyRef = useRef();
  const careerRef = useRef();

  // Called by child forms after successful API call
  const onStepNext = (data) => {
    setFormValues((prev) => ({ ...prev, ...data }));
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  // When user clicks Next button, trigger submit of current form
  const handleNext = () => {
    if (step === totalSteps) {
      // Final submit — call last form's submit, and redirect after success
      careerRef.current?.submit(() => {
        // Redirect after final form success
        router.push("/dashboard");
      });
    } else {
      switch (step) {
        case 1:
          personalRef.current?.submit();
          break;
        case 2:
          religiousRef.current?.submit();
          break;
        case 3:
          familyRef.current?.submit();
          break;
        default:
          break;
      }
    }
  };

  const getProgress = () => (step / totalSteps) * 100;

  const stepTitles = [
    "Personal Info",
    "Religious Info",
    "Family & Background",
    "Career & Education",
  ];

const renderStep = () => {
  switch (step) {
    case 1:
      return (
        <PersonalInfoForm
          ref={personalRef}
          onNext={onStepNext}
          setLoading={setLoading}
          initialValues={formValues}
        />
      );
    case 2:
      return (
        <ReligiousInfoForm
          ref={religiousRef}
          onNext={onStepNext}
          setLoading={setLoading}
          initialValues={formValues}
        />
      );
    case 3:
      return (
        <FamilyBackgroundForm
          ref={familyRef}
          onNext={onStepNext}
          setLoading={setLoading}
          initialValues={formValues}
        />
      );
    case 4:
      return (
        <CareerEducationForm
          ref={careerRef}
          onNext={onStepNext}
          setLoading={setLoading}
          initialValues={formValues}
        />
      );
    default:
      return null;
  }
};


  return (
    <>
      <header className="relative top-0 left-0 w-full bg-white shadow z-50">
        <div className="mx-10 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <span className="text-red-600 text-2xl font-bold">❤️</span>
            <span className="text-xl font-semibold text-red-700">
              Marrying Muslims
            </span>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-red-50 p-6 flex flex-col">
        <div className="w-2xl mx-auto">
          {/* Header and Step Indicator */}
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center space-x-1">
              <span>Complete Your Profile</span>
            </h2>
            <div className="text-xs font-medium text-red-600 rounded-full border border-red-600 py-1 px-3">
              Step {step} of {totalSteps}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="w-full bg-white rounded-full h-2.5">
              <div
                className="bg-red-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${getProgress()}%` }}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={getProgress()}
              />
            </div>

            {/* Step Navigation */}
            <nav className="mt-3 gap-10 flex space-x-5 text-sm font-medium text-gray-400 select-none">
              {stepTitles.map((title, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-1 ${
                    index + 1 === step ? "text-red-600" : "cursor-not-allowed"
                  }`}
                  aria-current={index + 1 === step ? "step" : undefined}
                >
                  {index + 1 === step ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4z" />
                      <path d="M16 16v2a4 4 0 01-8 0v-2" />
                    </svg>
                  ) : null}
                  <span>{title}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Dynamic Step Form */}
          {renderStep()}

          {/* Action Buttons */}
          <div className="flex justify-between items-center my-5">
            <button
              type="button"
              onClick={handlePrevious}
              className="bg-white border border-gray-300 text-gray-600 text-sm font-semibold rounded-md px-6 py-2 hover:bg-gray-100 cursor-pointer"
              disabled={step === 1}
            >
              &lt; Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={loading}
              className={`${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-red-700"
              } bg-red-600 text-white cursor-pointer text-sm font-semibold rounded-md px-6 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-1 flex items-center space-x-1`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>{step === totalSteps ? "Submit" : "Next"}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
