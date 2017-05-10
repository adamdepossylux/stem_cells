clf
function [y]=ex4(t,y)
    y=-y*ln(5);
endfunction
t0=0;tmax=5;
N=101;
h=(tmax-t0)/(N-1)
t=linspace(t0,tmax,N);
y1(1)=2;

y=2*exp(-ln(5)*t)

//Premiere méthode
for i=1:N-1
    y1(i+1)=y1(i)+h*ex4(t(i),y1(i));
end

//Deuxième méthode
for i=1:N-1
    yd=y2(i)+h*ex4(t(i),y2(i))
    y2(i+1)=y2(i)+(h/2)*(ex4(t(i),y2(i))+ex4(t(i+1),yd));
end

//Troisième métode
y0=2
y3=ode(y0,t0,t,ex4)

plot2d(t,y)
plot2d(t,y1,2)
plot2d(t,y2,3)
plot2d(t,y3,4)

legend(['analytique','Euler explicite','Euler modifiée','ode'])
