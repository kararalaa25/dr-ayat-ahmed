export const CATEGORIES = [
  { value: 'crown_bridge', label: 'Crown & Bridge', short: 'Crown & Bridge' },
  { value: 'veneers_dsd', label: 'Direct Veneers', short: 'Direct Veneers' },
  { value: 'surgical_guides', label: 'Endodontic Treatment', short: 'Endodontics' },
  { value: 'exocad', label: 'Class I & II Composite Restorations', short: 'Class I & II Composite' },
] as const;

export type CategoryValue = typeof CATEGORIES[number]['value'];

export const categoryLabel = (v: string) =>
  CATEGORIES.find((c) => c.value === v)?.label ?? v;
