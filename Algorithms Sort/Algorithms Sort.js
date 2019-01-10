var arr = [168, 1998, 1999, 2019, 1969, 1993, 2018, 3001];
var n = arr.length;
//Khai báo một mảng arr

function bubbleSort(arr)
// bubbleSort
	{
		
		for (let i = 0; i < n - 1; i++)
			{
				for (let j= 0; j < n - 1 - i; j++)
					{
						if (arr[j] > arr [j+1])
						{
							let temp = arr [j];
							arr [j] = arr [j+1];
							arr [j+1] = temp;
						}
					}
			}
		return arr;	
	 }
 console.log("BubbleSort:\n",bubbleSort(arr));


function insertionsort(arr)
// Insertionsort
{
	for(let i = 1; i < n ; i++)
		{
			let j = i - 1;
			let temp = arr [i];
			while (temp < arr [j] && j >= 0)
				{
					arr [j + 1]= arr[j];
					j--;
				}
			arr[j+1] = temp;
		}
	return arr;
}
console.log("InsertionSort\n",insertionsort(arr));



function selectionsort(arr)
//selectionsort
{
	for (let i = 0; i < n - 1; i++)
		{
			let min = i;
			for (let j = i + 1; j < n ; j++)
				{
					if (arr[j] < arr[min])
					min = j;
				}
				let temp = arr [i];
				arr [i] = arr [min];
				arr [min] = temp;
			
		}
	return arr
}
console.log("SelectionSort:\n",selectionsort(arr));

function mergeSort (arr) 
//mergeSort
{
	if (arr.length === 1) 
	{
	  return arr
	  // Trả về nếu chúng có một phần tử duy nhất.
	}
  
	let mid = Math.floor(arr.length / 2)
	// Tìm vị trí mid để mảng, Math.floor : có chức năng làm tròn
	let left = arr.slice(0, mid)
	// Khai báo và trả về một mảng mới có giá trị từ 0 đến vị trí mid
	let right = arr.slice(mid) 
	// Khai báo và trả về một mảng mới.
  
	return 	merge(
	  		mergeSort(left),
	  		mergeSort(right)
	)
}
  
	// So sánh các phần tử trong mảng và trả về mảng đã được sắp xếp hoàn chỉnh
 function merge (left, right) {
	let result = []
	let indexLeft = 0
	let indexRight = 0
  
while (indexLeft < left.length && indexRight < right.length)
{
	  if (left[indexLeft] < right[indexRight]) 
	  {
		result.push(left[indexLeft])
		indexLeft++
	  } 
	  else 
	  {
		result.push(right[indexRight])
		indexRight++
	  }
}
  
	return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}
console.log("MergeSort:\n",mergeSort(arr));



function shellSort(arr) 
{
    var mid = arr.length / 2;
	while (mid > 0) 
	{
		for (i = mid; i < arr.length; i++) 
		{
            var j = i;
            var temp = arr[i];
    
			while (j >= mid && arr[j-mid] > temp) 
			{
                arr[j] = arr[j-mid];
                j = j - mid;
            }
    
            arr[j] = temp;
        }
    
		if (mid == 2) 
		{
            mid = 1;
		} else 
		{
            mid = parseInt(mid*5 / 11);
        }
    }
  return arr;
}
console.log("ShellSort:\n",shellSort(arr));

function quickSort(n) 
//QuickSort
{
	if (n <= 1)
	{ 
		return n;
	} else 
	{

		var left = [];
		var right = [];
		var newarray = [];
		var pivot = n.pop();
		var length = n.length;

		for (var i = 0; i < length; i++) 
		{
			if (n[i] <= pivot) 
			{
				left.push(n[i]);
			} 
			else 
			{
				right.push(n[i]);
			}
		}

		return newarray.concat(quickSort(left), pivot, quickSort(right));
	}
}
console.log("QuickSort:\n",quickSort(arr));
