/* */ 
"format cjs";
import { Observable } from 'rxjs/Rx';
var obs = new Observable((obs) => {
    var i = 0;
    setInterval(_ => { obs.next(++i); }, 1000);
});
obs.subscribe(i => console.log(`${i} seconds elapsed`));
// #enddocregion
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL2V4YW1wbGVzL2ZhY2FkZS90cy9hc3luYy9vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUNPLEVBQUMsVUFBVSxFQUFhLE1BQU0sU0FBUztBQUM5QyxJQUFJLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBUyxDQUFDLEdBQXVCO0lBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQ3hELGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vICNkb2NyZWdpb24gT2JzZXJ2YWJsZVxuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpYmVyfSBmcm9tICdyeGpzL1J4JztcbnZhciBvYnMgPSBuZXcgT2JzZXJ2YWJsZTxudW1iZXI+KChvYnM6IFN1YnNjcmliZXI8bnVtYmVyPikgPT4ge1xuICB2YXIgaSA9IDA7XG4gIHNldEludGVydmFsKF8gPT4geyBvYnMubmV4dCgrK2kpOyB9LCAxMDAwKTtcbn0pO1xub2JzLnN1YnNjcmliZShpID0+IGNvbnNvbGUubG9nKGAke2l9IHNlY29uZHMgZWxhcHNlZGApKTtcbi8vICNlbmRkb2NyZWdpb25cbiJdfQ==