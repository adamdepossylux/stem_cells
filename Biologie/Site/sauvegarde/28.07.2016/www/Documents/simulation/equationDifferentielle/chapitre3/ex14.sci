clf
c=0.4;xmin=0;xmax=20;N=101;
function[y]=f14(x,u)
    y(1)=u(2);
    y(2)=c*(1-u(1)^2)*u(2)-u(1);
endfunction

t=linspace(xmin,xmax,N);
y0=0;vy0=1;
y=ode([y0;vy0],0,t,f14);
comet(y(1,:),y(2,:))
//plot2d(t,y(1,:))
