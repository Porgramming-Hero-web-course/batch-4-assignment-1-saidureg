{
  //
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shape: Shape): number => {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius ** 2;
    } else {
      return shape.width * shape.height;
    }
  };

  const circleArea: number = calculateShapeArea({
    shape: "circle",
    radius: 5,
  });

  const rectangleArea: number = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(circleArea.toFixed(2));
  console.log(rectangleArea);

  //
}
