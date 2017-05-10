clf;
c=3.986e+5;
function[y]=f16(x,u)
    y(1)=u(2);
    y(2)=-c*u(1)/((u(1)^2+u(3)^2)^(3/2));
    y(3)=u(4);
    y(4)=-c*u(3)/((u(1)^2+u(3)^2)^(3/2));
endfunction

T=2*24*60*60;
//Q1
teta=linspace(0,2*%pi,1001);
r=6400;
plot2d(r*cos(teta),r*sin(teta),2);
y0=[6400+35786;0;0;3.07];
t=linspace(0,T,5001);
y=ode(y0,0,t,f16);
comet(y(1,:),y(3,:))
