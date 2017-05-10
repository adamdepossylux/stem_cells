lambda=2;
t=linspace(0,5,101);
N0=60;
plot2d(t,N0*exp(-lambda*t),2);
lambda=5;
plot2d(t,N0*exp(-lambda*t),5);
