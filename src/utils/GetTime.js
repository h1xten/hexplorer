export default function getTime(time) {
    let _time = time.split('.')
    return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(_time[0]*1000)
}