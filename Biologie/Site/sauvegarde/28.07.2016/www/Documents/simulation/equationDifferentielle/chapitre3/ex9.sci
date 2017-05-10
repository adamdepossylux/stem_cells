// lorentz.sce
clf;
clear;

function y=lorentz(t,u)
    y(1) = 10*(u(2)-u(1));
    y(2) = 28*u(1)-u(2)-u(1)*u(3);;
    y(3) = -8*u(3)/3+u(1)*u(2);
endfunction

t=linspace(0,30,5001);
y0=[-10;10;25];
y=ode(y0,0,t,lorentz);
//param3d1(y(1,:),y(2,:),y(3,:))
comet3d(y(1,:),y(2,:),y(3,:))
