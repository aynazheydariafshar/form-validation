export const generateUniqueId = (): string => {
  return `exp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};
