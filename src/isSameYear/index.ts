import toDate from '../toDate/index.js'

/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */
export default function isSameYear(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number
): boolean {
  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear()
}