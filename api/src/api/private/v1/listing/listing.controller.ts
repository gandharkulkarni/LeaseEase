import { Request, Response, NextFunction } from "express";
import { HttpException, HttpResponse, Password } from "../../../../../commons/utils";

class UserController {

    public async addListing(request: Request, response: Response, next: NextFunction) {
        try {
          let user = request.body;
          response.status(200).send(new HttpResponse("addListing", "result", null, null, null, null));
        }
        catch (err) {
          console.log("addListing error.");
        }
      }
    
}

export default new UserController();