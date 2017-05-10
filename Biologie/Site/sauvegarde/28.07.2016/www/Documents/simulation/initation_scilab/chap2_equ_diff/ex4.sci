clf
x=linspace(0,5,101);
y=(10)*exp((1/4)*x)-(6)*exp((-1/4)*x);
plot2d(x,y);

clf
x=linspace(0,5,101);
y=exp(-x);
plot2d(x,y);

clf
x=linspace(0,5,101);
y=exp((1/2)*x);
plot2d(x,y);

clf
x=linspace(0,5,101);
y=exp((1/2)*x^2);
plot2d(x,y);

