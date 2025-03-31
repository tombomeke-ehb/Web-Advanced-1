const nativeSort = (arr) => {

};

const arraysAreEqual = (arr1, arr2) => {

};

document.getElementById('compareButton').addEventListener('click', () => {
    const testArray = generatedRandomArray(5000);
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = '<h2>Testresultaten</h2>'

    console.time('bubbleSort');
    const bubbleSorted = bubbleSort(testArray);
    const bubbleTime = performance.now();
    console.timeEnd('nativeSort');

    console.assert(
        arraysAreEqual(bubbleSorted, nativeSorted),
        'De sorteermethodes geven verschillende resultaten'
    );

    console.group('Sorteerresultaten');
    console.log('Eerste 5 elementen na bubbleSort:', bubbleSorted.slice(0, 5))
    console.log('Eerste 5 elementen na nativeSort:', nativeSorted.slice(0, 5))
    console.log('laatste 5 elementen na bubbleSort:', bubbleSorted.slice(-5))
    console.log('laatste 5 elementen na nativeSort:', nativeSorted.slice(-5))
    console.groupEnd();

    resultDiv.innerHTML += `
    <div class="result-item ${nativeTime < bubbleTime ? 'faster' : 'slower'}">
        <h3>Native Sort</h3>
        <p>Tijd: ${nativeTime.toFixed(2)} ms</p>
    </div>
    <div class="result-item ${bubbleTime < nativeTime ? 'faster' : 'slower'}">
        <h3>Bubble Sort</h3>
        <p>Tijd: ${bubbleTime.toFixed(2)} ms</p>
    </div>
    <p><strong>Verschil:</strong> ${Math.abs(nativeTime - bubbleTime).toFixed(2)} ms </p>
    <p>${nativeTime < bubbleTime ? 'Native Sort' : 'Bubble sort'} was sneller.</p> 
    `;

    console.log('Performance-vergelijken');
    const raito = Math.max(bubbleTime, nativeTime) / Math.min(bubbleTime, nativeTime);
    console.log(`De snelste methode was ${raito.toFixed(2)}x sneller dan de langzaamste.`)
})
