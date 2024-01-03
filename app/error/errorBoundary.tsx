"use client";
import React from "react";
import ErrorPage from "./page";

type Props = { children: any };

interface ErrorState {
  hasError: boolean;
  error: string;
  errorInfo: any;
}

export default class ErrorBoundary extends React.Component<Props, ErrorState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "", errorInfo: null };
  }
  componentDidCatch = (error, errorInfo) => {
    console.log(error, errorInfo);
    this.setState({ error: error, errorInfo: errorInfo, hasError: true });

    console.error("Error caught by error boundary:", error, errorInfo);
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render(): React.ReactNode {
    const { hasError, error, errorInfo } = this.state;
    if (hasError) {
      return <ErrorPage error={error} errorInfo={errorInfo}></ErrorPage>;
    } else return this.props.children;
  }
}
