export const differenceInAges = (ages) => {
    let minAge = Math.min(...ages);
    let maxAge = Math.max(...ages)
    let difAge = maxAge- minAge; 
    
    return [minAge,maxAge,difAge]
}

/// los puntos antes de ages son para descomponer el array -> spread operator -->