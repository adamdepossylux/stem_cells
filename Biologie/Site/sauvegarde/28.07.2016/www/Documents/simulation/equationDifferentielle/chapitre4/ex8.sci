clf
N=10000;
x=ceil(rand(1,N)*6)// réalisation de jeu de dé
mx=mean(x);
cumx=cumsum(x)./[1:N];
plot([1:N],cumx)
