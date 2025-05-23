import directus from './directus';
import type { Work, Creator, Category } from './directus';
import { readItems, readItem } from '@directus/sdk';

// Funzioni per recuperare i contenuti
export async function getWorks() {
  try {
    const works = await directus.request(
      readItems('works', {
        fields: ['*', 'creator.*', 'creator.user.*', 'category.*']
      })
    );
    return works as unknown as Work[];
  } catch (error) {
    console.error('Error fetching works:', error);
    return [];
  }
}

export async function getWorkById(id: string | number) {
  try {
    const work = await directus.request(
      readItem('works', id, {
        fields: ['*', 'creator.*', 'creator.user.*', 'category.*']
      })
    );
    return work as unknown as Work;
  } catch (error) {
    console.error('Error fetching work:', error);
    return null;
  }
}

export async function getCategories() {
  try {
    const categories = await directus.request(
      readItems('categories', {
        fields: ['*']
      })
    );
    return categories as unknown as Category[];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getCreators() {
  try {
    const creators = await directus.request(
      readItems('creators', {
        fields: ['*', { user: ['*'] }]
      })
    );
    return creators;
  } catch (error) {
    console.error('Error fetching creators:', error);
    return [];
  }
}

export async function getCreatorById(id: string | number) {
  try {
    const creator = await directus.request(
      readItem('creators', id, {
        fields: ['*', { user: ['*'] }]
      })
    );
    return creator;
  } catch (error) {
    console.error('Error fetching creator:', error);
    return null;
  }
}

export async function getGlobalSettings() {
  try {
    const globals = await directus.request(
      readItem('global', 'global', {
        fields: ['*']
      })
    );
    return globals;
  } catch (error) {
    console.error('Error fetching global settings:', error);
    return null;
  }
}
