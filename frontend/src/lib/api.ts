const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function fetchAPI(endpoint: string, options?: RequestInit) {
  const url = `${API_URL}${endpoint}`;
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  referrals: {
    list: () => fetchAPI('/referrals'),
    create: (data: unknown) => fetchAPI('/referrals', { method: 'POST', body: JSON.stringify(data) }),
  },
  careers: {
    list: () => fetchAPI('/careers'),
    create: (data: unknown) => fetchAPI('/careers', { method: 'POST', body: JSON.stringify(data) }),
  },
  contacts: {
    list: () => fetchAPI('/contacts'),
    create: (data: unknown) => fetchAPI('/contacts', { method: 'POST', body: JSON.stringify(data) }),
  },
};
