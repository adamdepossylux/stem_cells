clf
x=linspace(0,5,101);
x0=0;
v0=5;
k=3;
m=3;
y=x0*cos(sqrt(k/m)*x)+v0*sqrt(m/k)*sin(sqrt(k/m));
plot2d(x,y);
