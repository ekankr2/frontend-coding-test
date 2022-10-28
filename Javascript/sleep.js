var sleep = (time) => {
    console.log('sleep:', time);
    while (true); // 무한루프
}

setTimeout(() => sleep(10000), 0);
setTimeout(() => sleep(20000), 0);

// 예상되는 Console 출력 값은?