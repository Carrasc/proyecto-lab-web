/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = `query GetCourse($id: ID!) {
  getCourse(id: $id) {
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
export const listCourses = `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getClass = `query GetClass($id: ID!) {
  getClass(id: $id) {
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
export const listClasss = `query ListClasss(
  $filter: ModelClassFilterInput
  $limit: Int
  $nextToken: String
) {
  listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTopic = `query GetTopic($id: ID!) {
  getTopic(id: $id) {
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
export const listTopics = `query ListTopics(
  $filter: ModelTopicFilterInput
  $limit: Int
  $nextToken: String
) {
  listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
    }
    nextToken
  }
}
`;
