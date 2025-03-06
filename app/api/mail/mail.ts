"use server";
import { ReservationUser } from "@/app/interfaces/reservationUser";
import nodemailer from "nodemailer";

type Props = {
  email: string;
  phoneNumber: string;
  users: ReservationUser[];
  destination: string;
  arrivalTime: string;
  arrivalCity: string;
  date: string;
};

export async function sendMail({
  email,
  phoneNumber,
  users,
  destination,
  arrivalTime,
  arrivalCity,
  date,
}: Props) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_OUR_EMAIL,
      pass: process.env.NEXT_PUBLIC_OUR_PASSWORD,
    },
  });

  try {
    await transport.verify();
    await transport.sendMail({
      from: process.env.NEXT_PUBLIC_OUR_EMAIL,
      to: process.env.NEXT_PUBLIC_OWNER_EMAIL,
      subject: "Nova Rezervacija Sa Sajta",
      html: `
        <h2 style="text-align: start;">Nova Rezervacija</h2>
        <div style="font-family: Roboto, sans-serif; font-size: 16px; color: #333; max-width: 1200px">
          <p>Imate novu rezervaciju sa sajta. Evo svih detalja:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr style="background-color: #f2f2f2;">
                <th style="text-align: left; padding: 8px; border: 1px solid #ddd; color: #555;">Informacija</th>
                <th style="text-align: left; padding: 8px; border: 1px solid #ddd; color: #555;">Podaci</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">Email</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">Broj Telefona</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${phoneNumber}</td>
              </tr>
              <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Putnici</td>
                <td style="padding: 8px; border: 1px solid #ddd;">
                    ${users
                      .map(
                        (element) =>
                          `<p>${element.name} ${element.lastname}</p>`
                      )
                      .join("")}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">Destinacija</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${destination}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">Polazak</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${arrivalCity} ${arrivalTime}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">Datum</td>
                <td style="padding: 8px; border: 1px solid #ddd;">${date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    });
    return "Success";
  } catch (error) {
    if (error instanceof Error) return "Error";
  }
}
