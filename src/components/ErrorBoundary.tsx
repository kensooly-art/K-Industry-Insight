import React, { ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends (React.Component as any) {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const self = this as any;
    if (self.state.hasError) {
      let errorMessage = "An unexpected error occurred.";
      let errorDetails = null;

      try {
        // Check if it's a Firestore JSON error
        if (self.state.error?.message.startsWith('{')) {
          const firestoreError = JSON.parse(self.state.error.message);
          errorMessage = `Firestore Error: ${firestoreError.error}`;
          errorDetails = (
            <div className="mt-4 p-4 bg-black/20 rounded-lg text-xs font-mono text-gray-400 overflow-auto max-h-40">
              <pre>{JSON.stringify(firestoreError, null, 2)}</pre>
            </div>
          );
        } else {
          errorMessage = self.state.error?.message || errorMessage;
        }
      } catch (e) {
        // Fallback if parsing fails
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-[#2C2C2C] p-8 rounded-3xl border border-red-500/20 shadow-2xl text-center">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/20">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {errorMessage}
            </p>
            {errorDetails}
            <button
              onClick={() => window.location.reload()}
              className="w-full py-4 bg-[#007AFF] hover:bg-[#0056b3] text-white font-bold rounded-xl transition-all flex items-center justify-center"
            >
              <RefreshCcw className="w-5 h-5 mr-2" />
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return self.props.children;
  }
}
