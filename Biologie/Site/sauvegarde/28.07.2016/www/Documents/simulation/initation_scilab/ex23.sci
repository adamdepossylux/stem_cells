t=linspace(0,2*%pi,102);
r=linspace(0,2,102);
x=r.*cos(t);
y=r.*sin(t);
plot2d(x,y,6)
comet(x,y)
