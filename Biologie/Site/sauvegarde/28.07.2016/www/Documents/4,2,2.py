def syracuse(a,n):
    u=a
    for x in range(n):
        if u%2==0:
            u=u/2
        else:
            u=3*u+1
    return u

#for n in range(1,15):
 #   print(syracuse(5,n))

def longueur(a):
    n=1
    while syracuse(a,n)!=1:
        n=n+1
    return n+1


for a in range(1,101):
    print("la valeur est",a)
    print(longueur(a))

L=[longueur(x) for x in range(1,101)]

def maxliste(l):
    ma=l[0]
    for x in l:
        if x>ma:
            ma=x
    return ma

print(maxliste(L))



def listeSyracuse(a):
    l=[]
    n=0
    while syracuse(a,n)!=1:
        l=l+[syracuse(a,n)]
        n=n+1
    return l+[1]

print(listeSyracuse(7))

def longueur(a):
    n=1
    t= u/2 if u%2 , 

def hauteur(a):
    return maxliste(listeSyracuse(a))
