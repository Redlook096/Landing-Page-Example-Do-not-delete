
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ComparisonItem {
  feature: string;
  pro: boolean;
  standard: boolean;
}