import { faker } from '@faker-js/faker';

export function randomSentence(numberOfWords: number) {
  return faker.lorem.sentence(numberOfWords);
}
