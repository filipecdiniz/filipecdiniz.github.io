export default function CalculateFinal(MediaN1, MediaN2, NotaAI){
    const MediaTotal = (MediaN1 * 0.4) + ((MediaN2 + NotaAI) * 0.6)
    
    return MediaTotal.toFixed(1)
}