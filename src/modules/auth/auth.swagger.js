/**
 * @swagger
 * tags:
 *  name:Auth
 *  description:Auth module and Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          SendOTP:
 *              type:object
 *              required:
 *                  -   mobile
 *              properties:
 *                  mobile:
 *                      type:string
 */

/**
 * @swagger
 * 
 * /auth/send-otp:
 *  post:
 *      summary:login with otp in this end-point
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/SendOTP"
 *      responses:
 *          200:
 *              description:success
 */