/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = `subscription OnCreateCourse {
  onCreateCourse {
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
export const onUpdateCourse = `subscription OnUpdateCourse {
  onUpdateCourse {
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
export const onDeleteCourse = `subscription OnDeleteCourse {
  onDeleteCourse {
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
export const onCreateClass = `subscription OnCreateClass {
  onCreateClass {
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
export const onUpdateClass = `subscription OnUpdateClass {
  onUpdateClass {
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
export const onDeleteClass = `subscription OnDeleteClass {
  onDeleteClass {
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
export const onCreateTopic = `subscription OnCreateTopic {
  onCreateTopic {
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
export const onUpdateTopic = `subscription OnUpdateTopic {
  onUpdateTopic {
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
export const onDeleteTopic = `subscription OnDeleteTopic {
  onDeleteTopic {
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
