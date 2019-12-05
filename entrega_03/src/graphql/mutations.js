/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourse = `mutation CreateCourse($input: CreateCourseInput!) {
  createCourse(input: $input) {
    id
    name
    specialty
    numClasses
    descCourse
    descTeacher
    img {
      bucket
      key
      region
    }
    trailer {
      bucket
      key
      region
    }
    thumbnail {
      bucket
      key
      region
    }
    classes {
      items {
        id
        title
        numClass
      }
      nextToken
    }
  }
}
`;
export const updateCourse = `mutation UpdateCourse($input: UpdateCourseInput!) {
  updateCourse(input: $input) {
    id
    name
    specialty
    numClasses
    descCourse
    descTeacher
    img {
      bucket
      key
      region
    }
    trailer {
      bucket
      key
      region
    }
    thumbnail {
      bucket
      key
      region
    }
    classes {
      items {
        id
        title
        numClass
      }
      nextToken
    }
  }
}
`;
export const deleteCourse = `mutation DeleteCourse($input: DeleteCourseInput!) {
  deleteCourse(input: $input) {
    id
    name
    specialty
    numClasses
    descCourse
    descTeacher
    img {
      bucket
      key
      region
    }
    trailer {
      bucket
      key
      region
    }
    thumbnail {
      bucket
      key
      region
    }
    classes {
      items {
        id
        title
        numClass
      }
      nextToken
    }
  }
}
`;
export const createClass = `mutation CreateClass($input: CreateClassInput!) {
  createClass(input: $input) {
    id
    title
    numClass
    course {
      id
      name
      specialty
      numClasses
      descCourse
      descTeacher
      img {
        bucket
        key
        region
      }
      trailer {
        bucket
        key
        region
      }
      thumbnail {
        bucket
        key
        region
      }
      classes {
        nextToken
      }
    }
    topics {
      items {
        id
        numTopic
        title
        tags
      }
      nextToken
    }
  }
}
`;
export const updateClass = `mutation UpdateClass($input: UpdateClassInput!) {
  updateClass(input: $input) {
    id
    title
    numClass
    course {
      id
      name
      specialty
      numClasses
      descCourse
      descTeacher
      img {
        bucket
        key
        region
      }
      trailer {
        bucket
        key
        region
      }
      thumbnail {
        bucket
        key
        region
      }
      classes {
        nextToken
      }
    }
    topics {
      items {
        id
        numTopic
        title
        tags
      }
      nextToken
    }
  }
}
`;
export const deleteClass = `mutation DeleteClass($input: DeleteClassInput!) {
  deleteClass(input: $input) {
    id
    title
    numClass
    course {
      id
      name
      specialty
      numClasses
      descCourse
      descTeacher
      img {
        bucket
        key
        region
      }
      trailer {
        bucket
        key
        region
      }
      thumbnail {
        bucket
        key
        region
      }
      classes {
        nextToken
      }
    }
    topics {
      items {
        id
        numTopic
        title
        tags
      }
      nextToken
    }
  }
}
`;
export const createTopic = `mutation CreateTopic($input: CreateTopicInput!) {
  createTopic(input: $input) {
    id
    numTopic
    title
    tags
    video {
      bucket
      key
      region
    }
    class {
      id
      title
      numClass
      course {
        id
        name
        specialty
        numClasses
        descCourse
        descTeacher
      }
      topics {
        nextToken
      }
    }
  }
}
`;
export const updateTopic = `mutation UpdateTopic($input: UpdateTopicInput!) {
  updateTopic(input: $input) {
    id
    numTopic
    title
    tags
    video {
      bucket
      key
      region
    }
    class {
      id
      title
      numClass
      course {
        id
        name
        specialty
        numClasses
        descCourse
        descTeacher
      }
      topics {
        nextToken
      }
    }
  }
}
`;
export const deleteTopic = `mutation DeleteTopic($input: DeleteTopicInput!) {
  deleteTopic(input: $input) {
    id
    numTopic
    title
    tags
    video {
      bucket
      key
      region
    }
    class {
      id
      title
      numClass
      course {
        id
        name
        specialty
        numClasses
        descCourse
        descTeacher
      }
      topics {
        nextToken
      }
    }
  }
}
`;
