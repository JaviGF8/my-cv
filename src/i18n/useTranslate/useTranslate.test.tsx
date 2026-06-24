import { renderHook, act } from '@testing-library/react';

import '../index';

import useTranslate from './useTranslate';

describe('useTranslate', () => {
  it('default currentLanguage is esp', () => {
    const { result } = renderHook(() => useTranslate());
    expect(result.current.currentLanguage).toBe('esp');
  });

  it('t returns Spanish string by default', () => {
    const { result } = renderHook(() => useTranslate());
    expect(result.current.t('profile.title')).toBe('Perfil profesional');
  });

  it('changeLanguage switches to eng', () => {
    const { result } = renderHook(() => useTranslate());
    act(() => {
      result.current.changeLanguage('eng');
    });
    expect(result.current.currentLanguage).toBe('eng');
  });

  it('t returns English string after changeLanguage eng', () => {
    const { result } = renderHook(() => useTranslate());
    act(() => {
      result.current.changeLanguage('eng');
    });
    expect(result.current.t('profile.title')).toBe('Professional profile');
  });

  it('locales exposes date-fns eng and esp locales', () => {
    const { result } = renderHook(() => useTranslate());
    expect(result.current.locales.eng).toBeDefined();
    expect(result.current.locales.esp).toBeDefined();
  });
});
