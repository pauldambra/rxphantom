const child=require('child_process');
const Rx = require('rx');

const phantom=child.spawn('node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs.exe',['dosomething.js']);

//all hot observables
const data$ = Rx.Observable.fromEvent(phantom.stdout, 'data');
const errors$ = Rx.Observable.merge(
  Rx.Observable.fromEvent(phantom.stderr, 'data'),
  Rx.Observable.fromEvent(phantom, 'error')
);
const exit$ = Rx.Observable.fromEvent(phantom, 'exit');

data$.subscribe(d => console.log(d));
errors$.subscribe(e => console.log(e));
exit$.subscribe(x => {
	console.log('exiting at ', new Date().getTime());
});