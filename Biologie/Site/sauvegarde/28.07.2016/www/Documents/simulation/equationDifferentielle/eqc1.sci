// vnc mizoguchi L

a=
b=
i=
N=
t=[a,b]

h=(b-a)/(N-1)
y=in
for i:N-1
    y1=y
    y2=y1+(h/2)*F(xi,yi)+F
end

// Ode
function [y]=second_membre(t,u)
    y=f(x,u);
endfunction
exec second_membre.sce;
t=linspace(t0,tmax,101);
y=ode(y0, t0, t, second_membre);
plot2d(t0,y)
