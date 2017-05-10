n=10;
A=2*eye(n,n)

for(i=1:n-1)
    A(i,i+1)=1;
    A(i,i)=2
    A(i+1,i)=1;
end

disp(A)
