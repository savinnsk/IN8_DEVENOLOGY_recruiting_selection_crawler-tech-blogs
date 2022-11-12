export default {
    "openapi": "3.0.0",
    "info": {
      "title": "Api-Blog-Fav Documentation",
      "description": "This is an API",
      "version": "1.0.0",
      "contact": {
        "email":"saviopbrito@gmail.com.br"
      }
    },
    "paths": {
      "/users/create": {
        "post": {
          "tags": ["Users"],
          "summary": "Create a User",
           "description": "Create a new User",
           "requestBody": {
             "content": {
               "application/json": {
                 "schema": {
                   "type": "object",
                   "properties": {
                     "name": {
                       "type": "string"
                     },
                     "password": {
                       "type": "string"
                     },
                     "email": {
                      "type": "string"
                    }
                   },
                   "example": {
                     "name": "",
                     "description": "",
                     "email" : ""
                   }
                 }
               }
             }
           },
           "responses": {
             "201": {
               "description": "Success"
             },
             "500": {
               "description": "Error"
             }
           }
        }
 
      },
      "/sessions": {
        "post": {
          "tags": ["Users"],
          "summary": "Authentication user",
          "description": "Authentication user",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "email": {
                      "type": "string"
                    },
                    "password": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": { 
              "description": "Success"
            },
            "400": {
              "description": "Email or password incorrect!"
            }
          }
        }
      },
      "/bookmarks/delete/{bookmark_id}/{user_id}": {
        "post": {
          "tags": ["Bookmarks"],
          "summary": "Delete bookmark",
          "description": "Delete a bookmark",
          "parameters": [
            {
              "name": "bookmark_id",
              "in": "path",
              "description": "bookmark id",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "user_id",
              "in": "path",
              "description": "user id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Deleted"
            },
            "500": {
              "description": "Error"
            }
          }
        }
      },
      "/bookmarks/create": {
        "post": {
          "tags": ["Bookmarks"],
          "summary": "Create a Bookmark",
          "description": "Create a new Bookmark",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "label": {
                      "type": "string"
                    },
                    "link": {
                      "type": "string"
                    },
                    "id": {
                     "type": "string"
                   },
                   "token": {
                    "type": "string"
                  }
                  }
                  ,
                  "example": {
                    "bookmark_id" : "string_value_at_local_storage",
                    "token": "string_value_at_local_storage"
                  }
                }
              }
            }
          },
          
          "responses": {
            "201": {
              "description": "Success"
            },
            "500": {
              "description": "Fail"
            }
          }
        }
      },
      "/bookmarks/edit/{bookmark_id}/{user_id}": {
        "post": {
          "tags": ["Bookmarks"],
          "summary": "Delete bookmark",
          "description": "Delete a bookmark",
          "parameters": [
            {
              "name": "bookmark_id",
              "in": "path",
              "description": "bookmark id",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "user_id",
              "in": "path",
              "description": "user id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],"requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "label": {
                      "type": "string"
                    },
                    "link": {
                      "type": "string"
                    }
                  }
                  ,
                  "example": {
                    "link" : "string",
                    "label": "string"
                  }
                }
              }
            }
          },
          "responses": {
            "201": { 
              "description": "Created"
            }
          }
        }
      },
      "/bookmarks/list/{user_id}": {
        "post": {
          "tags": ["Bookmarks"],
          "summary": "List All bookmarks",
          "description": "List bookmarks",
          "parameters": [
            {
              "name": "user_id",
              "in": "path",
              "description": "user id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": { 
              "description": "Success"
            }
          }
        }
      }
      
    },
    "components": {
      "securitySchemes": {
        "bearerAuth": {
          "type": "http",
          "scheme": "bearer",
          "bearerFormat": "JWT"
        }
      }
    }
    
  }