| Test                                                       | Correct | NoLenCheck | NoTrim | NoLuhn | WrongYear |
| ---------------------------------------------------------- | :-----: | :--------: | :----: | :----: | :-------: |
| constructor should throw error when length is invalid      |   ✅    |     ❌     |   ✅   |   ✅   |    ✅     |
| constructor should trim input                              |   ✅    |     ❌     |   ❌   |   ✅   |    ✅     |
| constructor should throw error when luhn is not correct    |   ✅    |     ✅     |   ✅   |   ❌   |    ✅     |
| getYear should extract first two characters of SSN         |   ✅    |     ✅     |   ✅   |   ✅   |    ❌     |
| constructor should throw error when format is wrong        |   ✅    |     ✅     |   ✅   |   ✅   |    ✅     |
| constructor should throw error when month is invalid       |   ✅    |     ✅     |   ✅   |   ✅   |    ✅     |
| constructor should throw error when day is invalid         |   ✅    |     ✅     |   ✅   |   ✅   |    ✅     |
| getSerialNumber should return the last 4 digits in the SSN |   ✅    |     ✅     |   ✅   |   ✅   |    ✅     |
| **Coverage (%)**                                           |   100   |    100     |  100   |  100   |    100    |
