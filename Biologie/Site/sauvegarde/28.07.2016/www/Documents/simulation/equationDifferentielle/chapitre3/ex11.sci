clf 
clear


function[y]=f11(t,u)
    y(1)=u(2);
    y(2)=g-(r/m)*u(2);
endfunction

global g;
global m;
global r;
m=1;g=9.8;r=0.1;
N=101;

t=linspace(0,5,N);

y=ode([-100;-100],0,t,f11);

comet(t,y(1,:))
plot2d(t,y(1,:),5)
