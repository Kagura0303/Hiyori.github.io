function minus()
{
    var count = document.getElementById('text').innerHTML;
    count--;
    if(count<1)
    {
        count = 10;
    }
    document.getElementById('text').innerHTML = count;
}



function plus()
{
    var count = document.getElementById('text').innerHTML;
    count++;
    if(count>10)
    {
        count = 1;
    }
    document.getElementById('text').innerHTML = count;
}