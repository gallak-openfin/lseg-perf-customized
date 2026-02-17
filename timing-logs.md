--v=1 --disable-field-trial-config
workspace 42.138.102.4 workspace@22.3.25
Opening 20 example browser windows - Time to create 20 windows: 5068 ms (avg: 253 ms)
Opening 20 example browser windows - Time to load 20 windows: 2957 ms   (avg: 148 ms)
Closing 20 Windows - Time to close 20 windows: 2545 ms                  (avg: 127 ms)
Opening 20 example browser windows - Time to create 20 windows: 5021 ms (avg: 251 ms)
Opening 20 example browser windows - Time to load 20 windows: 2906 ms   (avg: 145 ms)
Closing 20 Windows - Time to close 20 windows: 2627 ms                  (avg: 131 ms)

container 42.138.102.4
Opening 20 example browser windows - Time to create 20 windows: 2795 ms (avg: 140 ms)
Opening 20 example browser windows - Time to load 20 windows: 2623 ms   (avg: 131 ms)
Closing 20 Windows - Time to close 20 windows: 2473 ms                  (avg: 124 ms)
Opening 20 example browser windows - Time to create 20 windows: 4259 ms (avg: 213 ms)
Opening 20 example browser windows - Time to load 20 windows: 4166 ms   (avg: 208 ms)
Closing 20 Windows - Time to close 20 windows: 3613 ms                  (avg: 181 ms)

workspace 40.130.104.2 workspace@22
Opening 20 example browser windows - Time to create 20 windows: 3781 ms (avg: 189 ms)
Opening 20 example browser windows - Time to load 20 windows: 2531 ms   (avg: 127 ms)
Closing 20 Windows - Time to close 20 windows: 1701 ms                  (avg: 85 ms)
Opening 20 example browser windows - Time to create 20 windows: 3755 ms (avg: 188 ms)
Opening 20 example browser windows - Time to load 20 windows: 2392 ms   (avg: 120 ms)
Closing 20 Windows - Time to close 20 windows: 1554 ms                  (avg: 78 ms)

container 40.130.104.2
Opening 20 example browser windows - Time to create 20 windows: 2415 ms (avg: 121 ms)
Opening 20 example browser windows - Time to load 20 windows: 2303 ms   (avg: 115 ms)
Closing 20 Windows - Time to close 20 windows: 1671 ms                  (avg: 84 ms)
Opening 20 example browser windows - Time to create 20 windows: 2459 ms (avg: 123 ms)
Opening 20 example browser windows - Time to load 20 windows: 2314 ms   (avg: 116 ms)
Closing 20 Windows - Time to close 20 windows: 1375 ms                  (avg: 69 ms)

workspace alpha-v43 workspace@23.0
Opening 20 example browser windows - Time to create 20 windows: 4408 ms (avg: 220 ms)
Opening 20 example browser windows - Time to load 20 windows: 2802 ms   (avg: 140 ms)
Closing 20 Windows - Time to close 20 windows: 625 ms                   (avg: 31 ms)
Opening 20 example browser windows - Time to create 20 windows: 4338 ms (avg: 217 ms)
Opening 20 example browser windows - Time to load 20 windows: 2719 ms   (avg: 136 ms)
Closing 20 Windows - Time to close 20 windows: 516 ms                   (avg: 26 ms)

workspace stable-v42 workspace@22.3.29
Opening 20 example browser windows - Time to create 20 windows: 3768 ms (avg: 188 ms)
Opening 20 example browser windows - Time to load 20 windows: 1681 ms   (avg: 84 ms)
Closing 20 Windows - Time to close 20 windows: 567 ms                   (avg: 28 ms)
Opening 20 example browser windows - Time to create 20 windows: 3590 ms (avg: 180 ms)
Opening 20 example browser windows - Time to load 20 windows: 1556 ms   (avg: 78 ms)
Closing 20 Windows - Time to close 20 windows: 518 ms                   (avg: 26 ms)

container stable-v42
Opening 20 example browser windows - Time to create 20 windows: 1719 ms (avg: 86 ms)
Opening 20 example browser windows - Time to load 20 windows: 1753 ms   (avg: 88 ms)
Closing 20 Windows - Time to close 20 windows: 390 ms                   (avg: 20 ms)
Opening 20 example browser windows - Time to create 20 windows: 1580 ms (avg: 79 ms)
Opening 20 example browser windows - Time to load 20 windows: 1535 ms   (avg: 77 ms)
Closing 20 Windows - Time to close 20 windows: 241 ms                   (avg: 12 ms)

container alpha-v43
Opening 20 example browser windows - Time to create 20 windows: 1701 ms (avg: 85 ms)
Opening 20 example browser windows - Time to load 20 windows: 1633 ms   (avg: 82 ms)
Closing 20 Windows - Time to close 20 windows: 469 ms                   (avg: 23 ms)
Opening 20 example browser windows - Time to create 20 windows: 1592 ms (avg: 80 ms)
Opening 20 example browser windows - Time to load 20 windows: 1541 ms   (avg: 77 ms)
Closing 20 Windows - Time to close 20 windows: 312 ms                   (avg: 16 ms)

electron
Opening 20 example browser windows - Time to create 20 windows: 720 ms  (avg: 36 ms)
Opening 20 example browser windows - Time to load 20 windows: 1186 ms   (avg: 59 ms)
Closing 20 Windows - Time to close 20 windows: 179 ms                   (avg: 9 ms)
Opening 20 example browser windows - Time to create 20 windows: 529 ms  (avg: 26 ms)
Opening 20 example browser windows - Time to load 20 windows: 926 ms    (avg: 46 ms)
Closing 20 Windows - Time to close 20 windows: 166 ms                   (avg: 8 ms)



optimized - mtp - no SW
Opening 20 example browser windows - Time to create 20 windows: 3068 ms (avg: 153 ms)
Opening 20 example browser windows - Time to load 20 windows: 1421 ms (avg: 71 ms)
Closing 20 Windows - Time to close 20 windows: 457 ms (avg: 23 ms)

Navigation → Fetch Start            14ms
DNS Lookup                          0ms
TCP Connect                         0ms
Request → Response (TTFB)           8ms
Response Download                   36ms
Response → DOM Loading              255ms ⚠️
DOM Loading → Interactive           92ms
Interactive → DOMContentLoaded      269ms ⚠️
DOMContentLoaded → Complete         89ms
Load Event                          0ms
─────────────────────────           ─────
TOTAL (navStart → loadEnd)          833ms ⚠️

manual refresh
cache:    Finish: 265ms | DOMContentLoaded: 165ms | Load 171ms
no cache: Finish: 265ms | DOMContentLoaded: 167ms | Load 170ms

optimized - mtp - with SW
Opening 20 example browser windows - Time to create 20 windows: 3108 ms (avg: 155 ms)
Opening 20 example browser windows - Time to load 20 windows: 1437 ms (avg: 72 ms)

Navigation → Fetch Start            59ms
DNS Lookup                          0ms
TCP Connect                         0ms
Request → Response (TTFB)           4ms
Response Download                   6ms
Response → DOM Loading              104ms ⚠️
DOM Loading → Interactive           749ms ⚠️
Interactive → DOMContentLoaded      106ms ⚠️
DOMContentLoaded → Complete         78ms
Load Event                          1ms
─────────────────────────           ─────
TOTAL (navStart → loadEnd)          1107ms ⚠️

manual refresh
cache:    Finish: 345ms | DOMContentLoaded: 243ms | Load 254ms
no cache: Finish: 424ms | DOMContentLoaded: 224ms | Load 228ms


Navigation → Fetch Start            63ms
DNS Lookup                          0ms
TCP Connect                         0ms
Request → Response (TTFB)           4ms
Response Download                   5ms
Response → DOM Loading              95ms
DOM Loading → Interactive           741ms ⚠️
Interactive → DOMContentLoaded      188ms ⚠️
DOMContentLoaded → Complete         215ms ⚠️
Load Event                          1ms
─────────────────────────           ─────
TOTAL (navStart → loadEnd)          1312ms ⚠️
manual refresh
cache:    Finish: 305ms | DOMContentLoaded: 213ms | Load 220ms
no cache: Finish: 309ms | DOMContentLoaded: 217ms | Load 221ms



----------- container app log testing
enabled
Opening 1 blank browser windows - Time to create 1 windows: 142 ms (avg: 142 ms)
Opening 1 blank browser windows - Time to load 1 windows: 650 ms (avg: 650 ms)

Opening 5 blank browser windows - Time to create 5 windows: 472 ms (avg: 94 ms)
Opening 5 blank browser windows - Time to load 5 windows: 2183 ms (avg: 437 ms)
Closing 5 Windows - Time to close 5 windows: 1681 ms (avg: 336 ms)

Opening 10 blank browser windows - Time to create 10 windows: 832 ms (avg: 83 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4512 ms (avg: 451 ms)
Closing 10 Windows - Time to close 10 windows: 6718 ms (avg: 672 ms)

disabled
Opening 1 blank browser windows - Time to create 1 windows: 149 ms (avg: 149 ms)
Opening 1 blank browser windows - Time to load 1 windows: 646 ms (avg: 646 ms)
Opening 5 blank browser windows - Time to create 5 windows: 403 ms (avg: 81 ms)
Opening 5 blank browser windows - Time to load 5 windows: 2118 ms (avg: 424 ms)
Closing 5 Windows - Time to close 5 windows: 1481 ms (avg: 296 ms)

Opening 10 blank browser windows - Time to create 10 windows: 844 ms (avg: 84 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4261 ms (avg: 426 ms)
Closing 10 Windows - Time to close 10 windows: 5206 ms (avg: 521 ms)


with http-server caching + avg fixes
Opening 10 blank browser windows - Time to create 10 windows: 1336 ms (avg: 134 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4024 ms (avg: 402 ms)


without http-server caching + avg fixes
Opening 10 blank browser windows - Time to create 10 windows: 1338 ms (avg: 134 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4019 ms (avg: 402 ms)

Opening 10 blank browser windows - Time to create 10 windows: 749 ms (avg: 75 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4016 ms (avg: 402 ms)


alpha-v42
top
Opening 10 blank browser windows - Time to create 10 windows: 1781 ms (avg: 178 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4725 ms (avg: 473 ms)
Closing 10 Windows - Time to close 10 windows: 5949 ms (avg: 595 ms)

no top
Opening 10 blank browser windows - Time to create 10 windows: 1771 ms (avg: 177 ms)
Opening 10 blank browser windows - Time to load 10 windows: 3963 ms (avg: 396 ms)
Closing 10 Windows - Time to close 10 windows: 6352 ms (avg: 635 ms)

electron
Opening 10 blank browser windows - Time to create 10 windows: 262 ms (avg: 26 ms)
Opening 10 blank browser windows - Time to load 10 windows: 1395 ms (avg: 140 ms)
Closing 10 Windows - Time to close 10 windows: 85 ms (avg: 9 ms)
Opening 10 blank browser windows - Time to create 10 windows: 232 ms (avg: 23 ms)
Opening 10 blank browser windows - Time to load 10 windows: 1387 ms (avg: 139 ms)
Closing 10 Windows - Time to close 10 windows: 90 ms (avg: 9 ms)


alpha-v42 - sync->async get-openfin-api ONLY
baseline
Opening 10 blank browser windows - Time to create 10 windows: 1584 ms (avg: 158 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4147 ms (avg: 415 ms)
Closing 10 Windows - Time to close 10 windows: 6092 ms (avg: 609 ms)

async
Opening 10 blank browser windows - Time to create 10 windows: 1823 ms (avg: 182 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4757 ms (avg: 476 ms)

Opening 10 blank browser windows - Time to create 10 windows: 1601 ms (avg: 160 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4475 ms (avg: 448 ms)

async + no get-preload sync call
Opening 10 blank browser windows - Time to create 10 windows: 1644 ms (avg: 164 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4270 ms (avg: 427 ms)

async + no get-preload sync call (NO app.on window-closed for iframes)
Opening 10 blank browser windows - Time to create 10 windows: 1639 ms (avg: 164 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4031 ms (avg: 403 ms)


electron with preload and url for blank.html
Opening 10 blank browser windows - Time to create 10 windows: 227 ms (avg: 23 ms)
Opening 10 blank browser windows - Time to load 10 windows: 1689 ms (avg: 169 ms)



container 42.138.103.2 baseline (iframe api injection OFF)
Opening 10 blank browser windows - Time to create 10 windows: 1276 ms (max) (avg: 1249 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4108 ms (max) (avg: 4092 ms)
Closing 10 Windows - Time to close 10 windows: 6180 ms (max) (avg: 4016 ms)
Opening 10 blank browser windows - Time to create 10 windows: 665 ms (max) (avg: 656 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4165 ms (max) (avg: 3834 ms)
Closing 10 Windows - Time to close 10 windows: 6144 ms (max) (avg: 3903 ms)

cached fs.promises.readFile (iframe api injection OFF)
Opening 10 blank browser windows - Time to create 10 windows: 1416 ms (max) (avg: 1398 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4174 ms (max) (avg: 4160 ms)
Closing 10 Windows - Time to close 10 windows: 6334 ms (max) (avg: 3862 ms)
Opening 10 blank browser windows - Time to create 10 windows: 660 ms (max) (avg: 653 ms)
Opening 10 blank browser windows - Time to load 10 windows: 3983 ms (max) (avg: 3684 ms)
Closing 10 Windows - Time to close 10 windows: 6238 ms (max) (avg: 4103 ms)

container 42.138.103.2 baseline (iframe api injection ON)
Opening 10 blank browser windows - Time to create 10 windows: 1093 ms (max) (avg: 1034 ms)
Opening 10 blank browser windows - Time to load 10 windows: 5408 ms (max) (avg: 5354 ms)
Closing 10 Windows - Time to close 10 windows: 5939 ms (max) (avg: 2242 ms)
Opening 10 blank browser windows - Time to create 10 windows: 748 ms (max) (avg: 727 ms)
Opening 10 blank browser windows - Time to load 10 windows: 5486 ms (max) (avg: 4984 ms)
Closing 10 Windows - Time to close 10 windows: 6115 ms (max) (avg: 699 ms)

cached fs.promises.readFile (iframe api injection ON)
Opening 10 blank browser windows - Time to create 10 windows: 1180 ms (max) (avg: 1128 ms)
Opening 10 blank browser windows - Time to load 10 windows: 5460 ms (max) (avg: 5429 ms)
Closing 10 Windows - Time to close 10 windows: 5620 ms (max) (avg: 1116 ms)
Opening 10 blank browser windows - Time to create 10 windows: 719 ms (max) (avg: 710 ms)
Opening 10 blank browser windows - Time to load 10 windows: 5262 ms (max) (avg: 3655 ms)
Closing 10 Windows - Time to close 10 windows: 6440 ms (max) (avg: 2615 ms)



alpha-v42 tiny entry
Opening 10 blank browser windows - Time to create 10 windows: 1394 ms (max) (avg: 1389 ms)
Opening 10 blank browser windows - Time to load 10 windows: 4736 ms (max) (avg: 4669 ms)
Closing 10 Windows - Time to close 10 windows: 6235 ms (max) (avg: 1980 ms)

Opening 10 blank windows - Time to create 10 windows: 4449 ms (max) (avg: 4444 ms)
Opening 10 blank windows - Time to load 10 windows: 4449 ms (max) (avg: 4449 ms)

-----> openfin-internal:// protocol changes
Opening 10 blank browser windows - Time to create 10 windows: total 13243 ms (avg: 1324 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 34885 ms (avg: 3489 ms)
--- 2nd sample
Opening 10 blank browser windows - Time to create 10 windows: total 13898 ms (avg: 1390 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 35555 ms (avg: 3556 ms)



alpha-v42 baseline
Opening 10 blank browser windows - Time to create 10 windows: total 16291 ms (avg: 1629 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 51210 ms (avg: 5121 ms)
--- 2nd sample
Opening 10 blank browser windows - Time to create 10 windows: total 13267 ms (avg: 1327 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 46886 ms (avg: 4689 ms)
--- 3rd sample
Opening 10 blank browser windows - Time to create 10 windows: total 13496 ms (avg: 1350 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 47936 ms (avg: 4794 ms)

Opening 10 blank windows - Time to create 10 windows: 4255 ms (max) (avg: 4249 ms)
Opening 10 blank windows - Time to load 10 windows: 4255 ms (max) (avg: 4254 ms)





Opening 1 blank browser windows - Time to create 1 windows: total 150 ms (avg: 150 ms)
Opening 1 blank browser windows - Time to load 1 windows: total 209 ms (avg: 209 ms)

alpha-v42 baseline
Opening 10 blank browser windows - Time to create 10 windows: total 14036 ms (avg: 1404 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 48632 ms (avg: 4863 ms)

alpha-v42 stagger only
Opening 10 blank browser windows - Time to create 10 windows: total 7440 ms (avg: 744 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 35801 ms (avg: 3580 ms)

openfin-protocol + warm module load
Opening 10 blank browser windows - Time to create 10 windows: total 15968 ms (avg: 1597 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 40748 ms (avg: 4075 ms)

+ stagger max 2 in parallel
Opening 10 blank browser windows - Time to create 10 windows: total 8415 ms (avg: 842 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 16144 ms (avg: 1614 ms)

Opening 10 blank browser windows - Time to create 10 windows: total 8193 ms (avg: 819 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 16962 ms (avg: 1696 ms)

Opening 10 blank browser windows - Time to create 10 windows: total 7946 ms (avg: 795 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 14990 ms (avg: 1499 ms)

Opening 1 blank browser windows - Time to create 1 windows: total 235 ms (avg: 235 ms)
Opening 1 blank browser windows - Time to load 1 windows: total 438 ms (avg: 438 ms)


------- staggering starts here

alpha-v42 baseline
Opening 10 blank browser windows - Time to create 10 windows: total 14036 ms (avg: 1404 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 48632 ms (avg: 4863 ms)
Opening 1 blank browser windows - Time to create 1 windows: total 150 ms (avg: 150 ms)
Opening 1 blank browser windows - Time to load 1 windows: total 209 ms (avg: 209 ms)

alpha-v42 stagger only
Opening 10 blank browser windows - Time to create 10 windows: total 7440 ms (avg: 744 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 35801 ms (avg: 3580 ms)

openfin-protocol + warm module load
Opening 10 blank browser windows - Time to create 10 windows: total 15968 ms (avg: 1597 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 40748 ms (avg: 4075 ms)

+ stagger max 2 in parallel
Opening 10 blank browser windows - Time to create 10 windows: total 8415 ms (avg: 842 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 16144 ms (avg: 1614 ms)

Opening 10 blank browser windows - Time to create 10 windows: total 8193 ms (avg: 819 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 16962 ms (avg: 1696 ms)

Opening 10 blank browser windows - Time to create 10 windows: total 7946 ms (avg: 795 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 14990 ms (avg: 1499 ms)

Opening 1 blank browser windows - Time to create 1 windows: total 235 ms (avg: 235 ms)
Opening 1 blank browser windows - Time to load 1 windows: total 438 ms (avg: 438 ms)


-------> get-openfin-api async no window staggering
Opening 10 blank browser windows - Time to create 10 windows: total 14022 ms (avg: 1402 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 47443 ms (avg: 4744 ms)

-------> get-openfin-api async window staggering - 2 at a time
Opening 10 blank browser windows - Time to create 10 windows: total 8412 ms (avg: 841 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 16356 ms (avg: 1636 ms)

-------> get-openfin-api async view staggering - 2 at a time
Opening 10 blank browser windows - Time to create 10 windows: total 20733 ms (avg: 2073 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 27555 ms (avg: 2756 ms)

-------> get-openfin-api async view staggering - 4 at a time
Opening 10 blank browser windows - Time to create 10 windows: total 18368 ms (avg: 1837 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 29023 ms (avg: 2902 ms)

-------> get-openfin-api sync + window staggering - 2 at a time
Opening 10 blank browser windows - Time to create 10 windows: total 8517 ms (avg: 852 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 16363 ms (avg: 1636 ms)

-------> get-openfin-api sync view staggering - 2 at a time
Opening 10 blank browser windows - Time to create 10 windows: total 21505 ms (avg: 2151 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 28970 ms (avg: 2897 ms)

-------> get-openfin-api sync view staggering - 4 at a time
Opening 10 blank browser windows - Time to create 10 windows: total 19395 ms (avg: 1940 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 31541 ms (avg: 3154 ms)

------ wednesday night
-------> alpha v42 get-openfin-api async + 304 cache + no module warming
Opening 10 blank browser windows - Time to create 10 windows: total 18965 ms (avg: 1897 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 29944 ms (avg: 2994 ms)
Closing 10 Windows - Time to close 10 windows: total 33431 ms (avg: 3343 ms)
Opening 10 blank browser windows - Time to create 10 windows: total 18253 ms (avg: 1825 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 28889 ms (avg: 2889 ms)

sims 42.138.103.2
Opening 10 blank browser windows - Time to create 10 windows: total 16809 ms (avg: 1681 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 38620 ms (avg: 3862 ms)


newest POC clean
--------------

alpha-v42 baseline
Opening 10 blank browser windows - Time to create 10 windows: total 14036 ms (avg: 1404 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 48632 ms (avg: 4863 ms)
Opening 1 blank browser windows - Time to create 1 windows: total 150 ms (avg: 150 ms)
Opening 1 blank browser windows - Time to load 1 windows: total 209 ms (avg: 209 ms)

finReady eventing
Opening 10 blank browser windows - Time to create 10 windows: total 14628 ms (avg: 1463 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 35990 ms (avg: 3599 ms)

writeToLog no-op
Opening 10 blank browser windows - Time to create 10 windows: total 11744 ms (avg: 1174 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 32860 ms (avg: 3286 ms)  <-- saves 313ms avg, 3sec saved

get-openfin-api async
Opening 10 blank browser windows - Time to create 10 windows: total 15769 ms (avg: 1577 ms)
Opening 10 blank browser windows - Time to load 10 windows: total 37482 ms (avg: 3748 ms)
