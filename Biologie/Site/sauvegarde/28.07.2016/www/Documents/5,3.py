from bibV3 import *

def toutdemarquer(G):
    for s in listeSommet(G):
        demarqueSommet(s)

def sommetAccessible(G):
    for s in listeSommet(G):
        for x in listeVoisins(s):
            if estMarqueSommet(s)!=estMarqueSommet(x) and not(estMarqueSommet(s)):
                return s
    return None

def appartenir(L,x):
    for t in L:
        if t==x:
            return True
    return False

def accessible(G,s,t):
    l=[s]
    for t in listeVoisins(l[n])
        for x in listeVoisins(t):
            while appartenir(l,x):
                l=l+[x]
        n=n+1
