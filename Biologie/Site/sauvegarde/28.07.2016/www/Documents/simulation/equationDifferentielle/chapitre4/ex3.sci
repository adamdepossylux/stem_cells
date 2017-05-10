clf
N=100000;
x=-2+(2+2)*rand(1,N);
y=-2+(2+2)*rand(1,N);

//for i=1:N-1 //avec boucle
  //  if (x(i)^2+y(i)^2<=1) then
    //    plot(x(i),y(i),'.')
    //end
//end

I=find(x^2+y^2<=1);
plot(x(I),y(I),'.')
