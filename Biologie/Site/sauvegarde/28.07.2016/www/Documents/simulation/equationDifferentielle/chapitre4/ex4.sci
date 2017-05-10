clf
N=1000000;
x=-2+(2+2)*rand(1,N);
y=-2+(2+2)*rand(1,N);
I=find(x^2+y^2<=1);
pi_test=(length(I)/N)*16
