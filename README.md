#components들을 따로 그룹화하여 관리.
크게 Header와 Contents로 구분하였고
Header내에는 h1제목과 Form이 존재함.
처음에 Form으로 따로 구분하지 않고 작성하였으나 h1제목까지 불필요하게 재렌더링되는 현상이 발생하여
Form component로 따로 구분.

Contents에서는 저번에 Todo와 List로 나누어서 todo를 출력했었어서 이번에는
Contents에서 전부 한번에 출력하게 작성해보았다.
하지만 이 또한 h1제목들이 불필요하게 렌더링되는 문제가 있어서 확실히 Todo와 List로
따로 나누어 렌더링하는것이 좀 더 효율적인 웹을 구성할 수 있을 것같다.
