import { createToHandleComparer } from './lib/create-result';
import { nullBranches } from './lib/gen';

declare global {
  namespace jest {
    interface Expect {
      toHandleNullBranches<T>(): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * When given a JSON-serialisable data structure, invokes your function multiple
       * for each copy of `shape` where a single nested Object or Array property has
       * been set to null. It is intended to assert that a function is resilient
       * against incomplete or invalid data received from external sources.
       *
       * See /packages/expect-more-jest/test/gen/null-branches.spec.ts for detail on
       * how values are deconstructed.
       *
       * @example
       * import { get } from 'lodash';
       * // Given this data
       * const shape = {
       *   deeply: {
       *     dippy: {
       *       bout: {
       *         the: {
       *           way: {
       *             you: ['walk']
       *           }
       *         }
       *       }
       *     }
       *   }
       * };
       * // This test would pass
       * it('asserts if your function safely reads nested values without throwing', () => {
       *   const safe = (data) => get('deeply.dippy.bout.the.way.you.0', data);
       *   expect(safe).toHandleNullBranches(shape);
       * });
       * // Whereas this test would fail
       * it('rejects if your function throws when attempting to read unreachable values', () => {
       *   const unsafe = ({
       *     deeply: {
       *       dippy: {
       *         bout: {
       *           the: {
       *             way: {
       *               you: [walk]
       *             }
       *           }
       *         }
       *       }
       *     }
       *   }) => walk;
       *   expect(unsafe).toHandleNullBranches(shape);
       * });
       */
      toHandleNullBranches(): R;
    }
  }
}

export const toHandleNullBranchesMatcher = createToHandleComparer('toHandleNullBranches', nullBranches);

expect.extend({ toHandleNullBranches: toHandleNullBranchesMatcher });
