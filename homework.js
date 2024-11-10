function checkProbabilityTheory(count)
{
    let evenCount = 0;
    const min = 100;
    const max = 1001;
    for (let i = 1; i <= count; i++) {
        const num = Math.floor(Math.random() * (max - min)) + min;
        if (num % 2 == 0) {
            evenCount++;
        }
    }
    console.log('Number of generated: ', count);
    console.log('Even count: ', evenCount);
    console.log('Odd count: ', count - evenCount);
    console.log('Even %: ', (evenCount / count) * 100);
}
checkProbabilityTheory(999);