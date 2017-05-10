x=linspace(-3,2,101);
y=linspace(-2,2,51);
[x,y]=meshgrid(x,y);
z=exp(-x.^2).*exp(-y.^2);
surf(x,y,z)
