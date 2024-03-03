import {expect, test, describe} from 'vitest';
import {add} from '../src';

describe('e2e tests', () => {
	test('should pass', () => {
		expect(add(1, 2)).toBe(3);
	});

	test('should fail', () => {
		expect(add(1, 2)).toBe(4);
	});
});
